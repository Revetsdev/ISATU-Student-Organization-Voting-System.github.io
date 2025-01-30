        // Show password toggle functionality
        document.getElementById('show-password').addEventListener('change', function () {
            var passwordField = document.getElementById('password');
            if (this.checked) {
                passwordField.type = 'text';
            } else {
                passwordField.type = 'password';
            }
        });
        
        // User database
        const users = [
            { username: "sample", password: "sample123" },
            { username: "2023-0520-B", password: "CALIGDONG-0520" },
            { username: "2023-0134-B", password: "PACLIBAR-0134" },
            { username: "2023-1819-B", password: "PACLIBAR-1819" },
            { username: "2023-2825-B", password: "PANES-2825" },
            { username: "2023-2828-B", password: "PEREZ-2828" },
            { username: "2023-1508-B", password: "PORRAS-1508" },
            { username: "2023-2636-B", password: "SINGSON-2636" },
            { username: "2023-1290-B", password: "TICAR-1290" },
            { username: "2023-1278-B", password: "TOCONG-1290" },
            { username: "2023-2022-B", password: "VILLANUEVA-2022" },
            { username: "2022-0388-B", password: "VILLANUEVA-0388" },
            { username: "2023-2351-B", password: "ALIVAR-2351" },
            { username: "2023-2342-B", password: "ALIVAR-2342" },
            { username: "2023-2736-B", password: "BARCELONA-2736" },
            { username: "2023-1687-B", password: "DIOSANA-1687" },
            { username: "2023-2535-B", password: "ESTIPONA-2535" },
            { username: "2023-2676-B", password: "FERPAS-2676" },
            { username: "2023-0030-B", password: "GALLO-0030" },
            { username: "2023-2627-B", password: "GUARDIANO-2627" },
            { username: "2023-0136-B", password: "HERNANDEZ-0136" },
            { username: "2023-2108-B", password: "JOLO-2108" },
            { username: "2003-0282-B", password: "LATORGO-0282" },
            { username: "2023-0419-B", password: "LEDESMA-0419" },
            { username: "2023-1982-B", password: "LIMJUCO-1982" },
            { username: "2023-2692-B", password: "LOZA-2692" }
        ];

        // Login function
        function login() {
            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();
            const errorMsg = document.getElementById("error-msg");

            // Find the user in the database
            const user = users.find(u => u.username === username && u.password === password);

            if (user) {
                window.location.href = "vote.html"; // Redirect to vote.html
            }

            if (username === "Admin" && password == "JivkDdZu") {
                // Redirect to admin page (e.g., dashboard.html)
                window.location.href = "admin.html";
            }
            
            else {
                errorMsg.textContent = "Invalid username or password.";
            }

        }
