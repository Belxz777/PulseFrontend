"use server "

import { host } from "./types";

async function registerUser(userData: createUser): Promise<any> {
    if (!userData) {
        throw new Error('User data is required');
    }

    const response = await fetch(`${host}users/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });
    return response.json();
}

export default registerUser;