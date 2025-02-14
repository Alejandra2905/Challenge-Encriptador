/* Reseteo de márgenes y paddings */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #white; /* Fondo general de la página */
    color: #333;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
}

header {
    margin-bottom: 20px;
    text-align: center;
}

h1 {
    color: #22D4FD;
}

main {
    width: 90%;
    max-width: 600px;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.input-section, .output-section {
    margin-bottom: 20px;
}

textarea {
    width: 100%;
    height: 100px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    resize: none;
}

textarea#output-text {
    background-color: #f9f9f9;
    border: 1px solid #9a3c84; /* Pink predominante */
}

.button-section {
    display: flex;
    justify-content: space-between;
    gap: 10px; /* Añade espacio entre los botones */
    margin-bottom: 20px;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    flex: 1; /* Hace que los botones ocupen el mismo espacio */
}

button#encrypt-btn {
    background-color: #400a73; /* Morado oscuro */
    color: white;
}

button#decrypt-btn {
    background-color: #c26ecf; /* Morado claro */
    color: white;
}

button#copy-btn {
    background-color: #ff803b; /* Naranja para emergentes */
    color: black;
}

footer {
    margin-top: 20px;
    text-align: center;
    font-size: 14px;
    color: #777;
}