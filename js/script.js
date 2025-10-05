'use strict';

async function fetchUserData(userId) {
    if (Math.random() > 0.3) {
        return { id: userId, name: `User ${userId}` };
    } else {
        throw new Error(`Failed to fetch user ${userId}`);
    }
}

async function getUsersData(userIds) {
    const success = [];
    const errors = [];

    for (const id of userIds) {
        try {
            const user = await fetchUserData(id);
            success.push(user);
        } catch (err) {
            errors.push({ id, error: err.message });
        }
    }

    return {success, errors};
}

const userIds = [1, 2, 3, 4, 5];

(async () => {
    const result = await getUsersData(userIds);
    console.log("✅ Success:", result.success);
    console.log("❌ Errors:", result.errors);
})();
