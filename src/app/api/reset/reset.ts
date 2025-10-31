import { NextResponse } from "next/server";

export const POST = () => {
  try {
    return NextResponse.json({
      message: 'пароль сброшен'
    })
  } catch (error) {
    
  }
}