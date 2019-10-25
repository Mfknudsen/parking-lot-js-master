class FøtexMonitor {
    constructor(parkingLot) {
        this.parkingLot = parkingLot;
        this.target = this.parkingLot.checkedInCars;
        this.wantedCars = ["TP 34 800", "FC 43 733"]
        this.checkForWanted();
        main(parkingLot)
    }

    checkForWanted() {
        const checkin = document.getElementById('entrance-gate');
        let Cars = this.parkingLot.checkedInCars;
        checkin.addEventListener('click', () => {
            try {
                Cars = this.parkingLot.checkedInCars;
                for (var key in Cars) {
                    for (var i = 0; i < this.wantedCars.length; i++) {
                        if (key == this.wantedCars[i]) {
                            console.log(key + " is wanted");
                            delete this.parkingLot.checkedInCars[key];
                            delete Cars[key];
                            this.wantedCars.splice(i, 1);
                        }
                    }
                };
            } catch (e) {
                alert(e.message);
            }
        });
    }
}