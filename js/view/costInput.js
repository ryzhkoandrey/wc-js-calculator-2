function init(getData) {
   const data = getData();
   const input = document.querySelector('#input-cost');

   const settings = {
      numeral: true,
      numeralThousandsGroupStyle: 'thousand',
      delimiter: ' ',
   };

   const cleaveInput = new Cleave(input, settings);

   cleaveInput.setRawValue(data.cost);

   input.addEventListener('input', () => {
      const value = +cleaveInput.getRawValue();

      // Проверка на мин и макс цену
      if (value < data.minPrice || value > data.maxPrice) {
         input.closest('.param__details').classList.add('param__details--error');
      } else {
         input.closest('.param__details').classList.remove('param__details--error');
      }
   });

   input.addEventListener('change', () => {
      const value = +cleaveInput.getRawValue();
      const minPrice = data.minPrice;
      const maxPrice = data.maxPrice;

      if (value < minPrice) {
         input.closest('.param__details').classList.remove('param__details--error');
         cleaveInput.setRawValue(minPrice);
      }

      if (value > maxPrice) {
         input.closest('.param__details').classList.remove('param__details--error');
         cleaveInput.setRawValue(maxPrice);
      }
   });
}

export default init;