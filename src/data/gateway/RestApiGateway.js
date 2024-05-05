import { URL } from "../../Constants";

export function fetchProducts() {
    console.log(`URL : ${URL}`);

    return fetch(URL)
        .then(response => {
            if (!response.ok) {
                throw new Error("Đã xảy ra sự cố")
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching products:', error);
            throw error; // Đảm bảo rằng lỗi được ném lại để xử lý ở đâu đó khác
        });
}
