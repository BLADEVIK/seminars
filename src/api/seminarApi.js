const API_URL = "http://localhost:3000/seminars";
// Получение списка семинаров
export const fetchSeminars = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Ошибка при загрузке семинаров");
  }
  return response.json();
};

// Удаление семинара
export const deleteSeminar = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Ошибка при удалении семинара");
  }
};

// Обновление семинара
export const updateSeminar = async (id, seminarData) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(seminarData),
  });
  if (!response.ok) {
    throw new Error("Ошибка при сохранении семинара");
  }
};
