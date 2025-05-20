const alphavit = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
        ];


    let alphabetDisplay = '';
    for (let i = 0; i < alphavit.length; i++) {
        alphabetDisplay += alphavit[i]
        if (i < alphavit.length - 1) {
            alphabetDisplay += ' ';
        }
    }
        document.getElementById('alphavitOutput').textContent = alphabetDisplay;
        
        
        function processText(text) {
            let result = '';
            let operationLog = '';
            
            for (let i = 0; i < text.length; i++) {
                const originalChar = text[i];
                let processedChar = originalChar;
                let found = false;
                
                for (let j = 0; j < alphavit.length; j++) {
                    if (alphavit[j] === originalChar) {
                        found = true;
                        let newIndex;
                        
                        if (j < 26) { // Заглавные буквы
                            newIndex = (j + 13) % 26;
                        } else { // Строчные буквы
                            newIndex = 26 + ((j - 26 + 13) % 26);
                        }
                        
                        processedChar = alphavit[newIndex];
                        
                        operationLog += `'${originalChar}' (${j}) → '${processedChar}' (${newIndex})<br>`;
                        break;
                    }
                }
                
                if (!found) {
                    operationLog += `'${originalChar}' → не буква, оставлен как есть<br>`;
                }
                
                result += processedChar;
            }
            
            return { result, operationLog };
        }

        // Обработчики кнопок
        document.getElementById('encryptBtn').addEventListener('click', function() {
            const inputText = document.getElementById('inputText').value;
            const { result, operationLog } = processText(inputText);
            
            document.getElementById('outputText').value = result;
            document.getElementById('operationOutput').innerHTML = operationLog;
        });

