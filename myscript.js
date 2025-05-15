document.addEventListener("DOMContentLoaded", function() {
    // HTML elementlerini seçiyoruz
    const ingredientButtons = document.querySelectorAll('.ingredient');
    const ingredientList = document.getElementById('ingredient-list');
    const makeDishButton = document.getElementById('makeDish');
    const resultText = document.getElementById('dish-name');

    // HTML öğelerinin doğru şekilde alındığından emin olalım
    if (!ingredientButtons || !makeDishButton || !ingredientList || !resultText) {
        console.error("HTML öğeleri doğru şekilde bulunamadı.");
        return;
    }

    // Seçilen malzemeleri saklamak için bir dizi oluşturuyoruz
    let selectedIngredients = [];

    // Malzeme butonlarına tıklanmasını dinliyoruz
    ingredientButtons.forEach(button => {
        button.addEventListener('click', () => {
            const ingredient = button.getAttribute('data-ingredient');
            if (!selectedIngredients.includes(ingredient)) {
                selectedIngredients.push(ingredient);
                updateSelectedIngredients();
            }
        });
    });

    // Seçilen malzemeleri güncelleme fonksiyonu
    function updateSelectedIngredients() {
        ingredientList.innerHTML = ''; // Önce listeyi temizleyelim
        selectedIngredients.forEach(ingredient => {
            const li = document.createElement('li');
            li.textContent = ingredient;
            ingredientList.appendChild(li);
        });
    }

    // Yemek yapma butonuna tıklanmasını dinliyoruz
    makeDishButton.addEventListener('click', () => {
        if (selectedIngredients.length === 0) {
            resultText.textContent = 'Lütfen malzemeleri seçin!';
            return;
        }

        // Basit yemek kombinasyonları oluşturuyoruz
        if (selectedIngredients.includes('Mercimek') && selectedIngredients.includes('Soğan') && selectedIngredients.includes('Havuç')) {
            resultText.textContent = 'Mercimek Çorbası';
        } else if (selectedIngredients.includes('Tavuk') && selectedIngredients.includes('Patlıcan')) {
            resultText.textContent = 'Fırında Tavuk ve Patlıcan';
        } else if (selectedIngredients.includes('Makarna')) {
            resultText.textContent = 'Makarna';
        } else {
            resultText.textContent = 'Hedeflediğiniz yemek bulunamadı, daha fazla malzeme ekleyin!';
        }
    });
});
