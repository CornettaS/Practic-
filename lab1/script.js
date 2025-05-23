const alphavit = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
        ];

        
        function processText(text) {
            let result = '';
            let operationLog = '';
            
            for (let i = 0; i < text.length; i++) {
                const originalChar = text[i];
                let processedChar = originalChar;
                let symbolInAlfavit = false;
                
            for (let j = 0; j < alphavit.length; j++) {
            if (alphavit[j] === originalChar) {
                symbolInAlfavit = true;
                let newIndex;

                if (j < 26) { // Заглавные буквы A-Z
                    newIndex = j + 13;
                    if (newIndex >= 26) {
                        newIndex -= 26;
                    }
                } else { // Строчные буквы a-z
                    newIndex = j + 13;
                    if (newIndex >= 52) {
                        newIndex -= 26;
                    }
                }

                processedChar = alphavit[newIndex];
                operationLog += `'${originalChar}' (${j}) → '${processedChar}' (${newIndex})<br>`;
                break;
            }
        }

                
                if (!symbolInAlfavit) {
                    operationLog += `'${originalChar}' → нет в списке, оставлю как есть вдруг пригодится <br>`;
                }
                
                result += processedChar;
            }
            
            return { result, operationLog };
        }

        // Обработчик ввода текста
        document.getElementById('inputText').addEventListener('input', function() {
            const inputText = document.getElementById('inputText').value;
            const { result, operationLog } = processText(inputText);
            
            document.getElementById('outputText').value = result;
            document.getElementById('operationOutput').innerHTML = operationLog;
        });

