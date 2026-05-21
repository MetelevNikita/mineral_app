type TokenPayload = {
  exp?: number
  [key: string]: unknown
}

const textEncoder = new TextEncoder()
const textDecoder = new TextDecoder()

const decodeBase64Url = (value: string) => {
  const base64 = value.replace(/-/g, '+').replace(/_/g, '/')
  const padded = base64.padEnd(base64.length + (4 - (base64.length % 4)) % 4, '=')
  const binary = atob(padded)
  const bytes = new Uint8Array(binary.length)

  for (let i = 0; i < binary.length; i += 1) {
    bytes[i] = binary.charCodeAt(i)
  }

  return bytes
}

export async function verifyToken(token: string) {
  try {
    if (!token) {
      return { valid: false, error: 'Token доступа отсутствует' }
    }

    const secret = process.env.SECRET_KEY
    if (!secret) {
      return { valid: false, error: 'SECRET_KEY отсутствует' }
    }

    const parts = token.split('.')
    if (parts.length !== 3) {
      return { valid: false, error: 'Некорректный формат токена' }
    }

    const [header, payload, signature] = parts
    const decodedHeader = JSON.parse(textDecoder.decode(decodeBase64Url(header)))

    if (decodedHeader.alg !== 'HS256') {
      return { valid: false, error: 'Неподдерживаемый алгоритм токена' }
    }

    const key = await crypto.subtle.importKey(
      'raw',
      textEncoder.encode(secret),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['verify'],
    )

    const isSignatureValid = await crypto.subtle.verify(
      'HMAC',
      key,
      decodeBase64Url(signature),
      textEncoder.encode(`${header}.${payload}`),
    )

    if (!isSignatureValid) {
      return { valid: false, error: 'Неверная подпись токена' }
    }

    const decoded = JSON.parse(textDecoder.decode(decodeBase64Url(payload))) as TokenPayload

    if (decoded.exp && decoded.exp <= Math.floor(Date.now() / 1000)) {
      return { valid: false, error: 'Срок действия токена истек' }
    }

    return { valid: true, decoded }
  } catch (error: Error | unknown) {
    if (error instanceof Error) {
      return { valid: false, error: error.message }
    }

    return { valid: false, error: 'неизвестная ошибка' }
  }
}
