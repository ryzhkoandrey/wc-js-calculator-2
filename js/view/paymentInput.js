import updateModel from "./../utils/updateModel.js";

function init(getData) {
   const input = document.querySelector('#input-downpayment');

   const settings = {
      numeral: true,
      numeralThousandsGroupStyle: 'thousand',
      delimiter: ' ',
   };

   const cleaveInput = new Cleave(input, settings);

   cleaveInput.setRawValue(getData().payment);

   input.addEventListener('input', () => {
      const value = +cleaveInput.getRawValue();

      // Проверка на мин и макс сумму первого платежа
      if (value < getData().getMinPayment() || value > getData().getMaxPayment()) {
         input.closest('.param__details').classList.add('param__details--error');
      } else {
         input.closest('.param__details').classList.remove('param__details--error');
      }

      // Обновить модель
      updateModel(input, { payment: value, onUpdate: 'inputPayment' });
   });

   input.addEventListener('change', () => {
      const value = +cleaveInput.getRawValue();

      if (value < getData().getMinPayment()) {
         input.closest('.param__details').classList.remove('param__details--error');
         cleaveInput.setRawValue(getData().getMinPayment());
      }

      if (value > getData().getMaxPayment()) {
         input.closest('.param__details').classList.remove('param__details--error');
         cleaveInput.setRawValue(getData().getMaxPayment());
      }

      // Обновить модель
      updateModel(input, { payment: value, onUpdate: 'inputPayment' });
   });

   return cleaveInput;
}

export default init;