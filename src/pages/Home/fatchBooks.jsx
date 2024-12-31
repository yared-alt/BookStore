import { useEffect, useState } from "react";

const BookData = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fatchD = async () => {
            try {
                const res = await fetch("boookData.json");
                const commingData = await res.json();
                setData(commingData);

            } catch (err) {
                console.error(err)
            }
        }
        fatchD();
    }, [])

    return data;
}

export default BookData;