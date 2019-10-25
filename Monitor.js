class Monitor {
    constructor(parkingLot) {
        this.parkingLot = parkingLot;
        this.targets = this.parkingLot.checkedInCars;

        main(parkingLot)

        this.GetInformation();

        this.AllParkedCars = {};
        this.RecentParkedCar = {};
        this.RecentLeftCar = {};
    }

    GetInformation() {
        const checkin = document.getElementById('entrance-gate');
        const checkout = document.getElementById('exit-gate');

        let Cars = this.parkingLot.checkedInCars;

        checkin.addEventListener('click', () => {
            try {
                let tempObj = {};
                for (var key in Cars) {
                    if (this.AllParkedCars[key] == undefined) {
                        this.AllParkedCars[key] = Cars[key];
                        tempObj[key] = Cars[key];
                    }
                };

                if (this.RecentParkedCar != tempObj) {
                    this.RecentParkedCar = tempObj;
                    console.log("Denne bil har parkeret:");
                    console.log(this.RecentParkedCar);
                }
                
                console.log("Alle parkerede biler:");
                console.log(this.AllParkedCars);
            } catch (e) {
                alert(e.message);
            }
        });

        checkout.addEventListener('click', () => {
            try {
                let tempObj = {};
                for (var key in this.AllParkedCars) {
                    if (Cars[key] == undefined) {
                        tempObj[key] = this.AllParkedCars[key];
                        delete this.AllParkedCars[key];
                    }
                };

                if (this.RecentLeftCar != tempObj) {
                    this.RecentLeftCar = tempObj;
                    console.log("Denne bil har forladt parkeringspladsen:");
                    console.log(this.RecentLeftCar);
                }

                console.log("Alle parkerede biler:");
                console.log(this.AllParkedCars);
            } catch (e) {
                alert(e.message);
            }
        })
    }
}