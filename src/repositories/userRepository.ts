import connectionDb from "../config/server.ts"

export async function insetUserIntoUsers(user: { name: string, email: string, password: string }) {
    return connectionDb.query(
        `INSERT INTO users (name, email, password) SELECT $1, $2, $3;`,
        [user.name, user.email, user.password]
    )
}

export async function findUserByEmail(email: string) {
    return connectionDb.query(
        `SELECT * FROM users WHERE email = $1;`, [email]
    )
}

export async function getUsersFromUsers() {
    return connectionDb.query(
        `SELECT * FROM users;`
    )
}

export async function deleteUserById(id: number) {
    return connectionDb.query(
        `DELETE FROM users WHERE id = $1;`, [id]
    )
}