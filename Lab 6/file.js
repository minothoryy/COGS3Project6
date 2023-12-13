let totalGuestsInput = prompt("Enter the number of guests:");
let numberOfTablesInput = prompt("Enter the number of tables:");

        function distributeGuestsatTables() {

            let guestsPerTable = Math.floor(totalGuests / numberOfTables);
            let leftoverGuests = totalGuests % numberOfTables;


            return {
                totalGuests: totalGuests,
                numberOfTables: numberOfTables,
                guestsPerTable: guestsPerTable,
                leftoverGuests: leftoverGuests,
            };
        }

        // A prompt is easy to get user input

        // convert the input into numeric data types
        let totalGuests = parseInt(totalGuestsInput);
        let numberOfTables = parseInt(numberOfTablesInput);
    

        // it is good programming practice to validate the input 
        if (isNaN(totalGuests) || isNaN(numberOfTables) || totalGuests < 1 || numberOfTables < 1) {
            alert("Invalid input. Please enter valid positive numbers.");
        } 
        else {
            let result = distributeGuestsatTables(totalGuests, numberOfTables);
            alert(`Your ${totalGuests} guests will be seated as follows: ${result.leftoverGuests} tables of ${result.guestsPerTable +1} , and ${numberOfTables - result.leftoverGuests} of ${result.guestsPerTable}.`);
        }