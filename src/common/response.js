
export const response = (status, message, body) => {
    return {
        status,
        message,
        body
    }
}

export const setVar = (data) => {
    const [primer_nivel] = data;
    const [segundo_nivel] = primer_nivel;
    return segundo_nivel;
}