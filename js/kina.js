class KinaStrategy {
    getDescription() {
        return " Velkommen til Kinas Ambassade. Det koster ikke noget at parkere her."
    }

    calculatePrice(checkinTime, checkoutTime) {
        return 0;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Monitor(new ParkingLot(new KinaStrategy()));
});