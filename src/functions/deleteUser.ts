export const deleteUser = async (userID: string): Promise<{message: string, status: number } | any> => {
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


        return {
            message: "Пользователь успешно удален",
            status: response.status
        }
 

    } catch (error) {
        console.error("Ошибка при удалении пользователя:", error);
    }
}