const authorizeFunction = async () => {
    const token = localStorage.getItem("token");
    if (token) {
        try {
            const response = await fetch('http://localhost:3000/verifyToken', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'token': localStorage.getItem("token"),
                }
            });

            const data = await response.json();

            if (data.isValid !== false) {
                setAutorizado(true);
            } else {
                window.location.href = "/unauthorized"
            }
        } catch (error) {
            return;
        }
    } else {
        window.location.href = "/";
    }
}

export default authorizeFunction; 