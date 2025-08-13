export const deleteUser = async (userID: string): Promise<void> => {
    try {

        if (!userID) {
            throw new Error("нет пользователя с таким ID");
        }

        console.log("Deleting user with ID:", userID);

        const response = await fetch(`/api/users/${userID}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error(`Ошибка при удалении пользователя с ID ${userID}`);
        }

        const result = await response.json();
        console.log("Результат удаления пользователя:", result);

        window.confirm("Пользователь успешно удален. Вы будете перенаправлены на страницу входа.");
        sessionStorage.removeItem('userID'); 
        window.location.href = '/auth/login';  

    } catch (error) {
        console.error("Ошибка при удалении пользователя:", error);
    }
}