async function cheat1() {
    try {
        const token = localStorage.getItem("u_t");
        const url = "";
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };

        const response = await fetch(url, options);
        const data = await response.json();
        
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

async function cheat2() {
    try {
        const token = localStorage.getItem("u_t");
        const url = "";
        const options = {
            method: "POST",
            body: JSON.stringify({}),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };

        const response = await fetch(url, options);
        const data = await response.json();

        console.log(data);
    } catch (err) {
        console.log(err);
    }
}
