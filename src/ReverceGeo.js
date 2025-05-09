let output;

const getLocation = () => {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    resolve({ latitude, longitude });
                },
                (error) => {
                    console.error("Error fetching location:", error);
                    reject("Unable to retrieve your location.");
                }
            );
        } else {
            reject("Geolocation is not supported by this browser.");
        }
    });
};

const fetchIsOnWater = async () => {
    try {
        const { latitude, longitude } = await getLocation();

        const url = `https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}&api_key=681c7df106c9d861158186urhdb786f`;

        const response = await fetch(url); // No custom headers or 'no-cors'
        if (!response.ok) throw new Error("API response error");

        const result = await response.json();
        console.log("Reverse geocode result:", result);
        return result;

    } catch (error) {
        console.error("API or location error:", error);
        return { error: "Failed to fetch location or API data" };
    }
};

// Call it like this
fetchIsOnWater().then(data => {
    output = data;
    console.log("Output:", output.address.town);
});

export default fetchIsOnWater;