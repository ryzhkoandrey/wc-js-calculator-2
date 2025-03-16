import updateModel from "./../utils/updateModel.js";

function init(getData) {
   const input = document.querySelector('#input-downpayment');

   const settings = {
      numeral: true,
      numeralThousandsGroupStyle: 'thousand',
      delimiter: ' ',
   };

   const cleaveInput = new Cleave(input, settings);

   cleaveInput.setRawValue(data.payment);

   input.addEventListener('input', () => {
      const value = +cleaveInput.getRawValue();

      // Проверка на мин и макс цену
      if (value < data.minPrice || value > data.maxPrice) {
         input.closest('.param__details').classList.add('param__details--error');
      } else {
         input.closest('.param__details').classList.remove('param__details--error');
      }

      // Обновить модель
      updateModel(input, { cost: value, onUpdate: 'inputCost' });
   });

   input.addEventListener('change', () => {
      const value = +cleaveInput.getRawValue();

      if (value < data.minPrice) {
         input.closest('.param__details').classList.remove('param__details--error');
         cleaveInput.setRawValue(data.minPrice);
      }

      if (value > data.maxPrice) {
         input.closest('.param__details').classList.remove('param__details--error');
         cleaveInput.setRawValue(data.maxPrice);
      }

      // Обновить модель
      updateModel(input, { cost: +cleaveInput.getRawValue(), onUpdate: 'inputCost' });
   });

   return cleaveInput;
}

export default init;