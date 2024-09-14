

import sha256 from "crypto-js/sha256";
import Constants from "expo-constants";
import axios from "axios";


const API_URL = "https://test.api.meteoraiapps.com/api/v1";


const generateChecksum = (deviceId, hasPremium, expiredAt) => {
    const hashString = `${deviceId}:${hasPremium}:${expiredAt}aboba`;
    return sha256(hashString).toString();
};

// Аутентификация пользователя
export const authenticateUser = async (devId) => {
    const date = new Date().toISOString();
    const body = {
        deviceId: devId,
        hasPremium: true,
        expiredAt: date,
        checksum: generateChecksum(devId, true, date),
    };

    try {
        const response = await fetch(`${API_URL}/auth/jwt`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        if (response.ok) {
            const data = await response.json();
            return data.accessToken;
        } else {
            throw new Error(`Authentication error, status: ${response.status}`);
        }
    } catch (error) {
        throw new Error(`Authentication error, status: ${error.message}`);
    }
};

// Получение истории пользователя
export const fetchHistory = async (devId, token) => {
    try {
        const response = await fetch(`${API_URL}/history/user/${devId}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error(`Error when getting the history, status:: ${response.status}`);
        }
    } catch (error) {
        throw new Error(`Error when getting the history: ${error.message}`);
    }
};

// Проверка лимита запросов
export const fetchLimit = async (token) => {
    try {
        const response = await fetch(`${API_URL}/user/rate-limit`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (response.ok) {
            const data = await response.json();
            return data.canRequest;
        } else {
            throw new Error(`Error checking the limit, status: ${response.status}`);
        }
    } catch (error) {
        throw new Error(`Error checking the limit: ${error.message}`);
    }
};

export const fetchModels = async (token) => {
    try {
        const response = await axios.get(`${API_URL}/models`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw new Error(`Error receiving models: ${error.message}`);
    }
};


export const enqueueTask = async (token, text, textTitle, voiceId, image) => {
    try {
        const response = await axios.post(
            `${API_URL}/models/enqueue`,
            {
                text: text,
                voice_id: voiceId,
                title: textTitle,
                image: image,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        return response;
    } catch (error) {
        throw new Error(`Error sending the task${error.message}`);
    }
};
