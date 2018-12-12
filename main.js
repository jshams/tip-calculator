// Your scripts here
const amount = document.getElementById('amount');
const percent = document.getElementById('percent');
const people = document.getElementById('people');


const tip = document.getElementById('tip');
const total = document.getElementById('total');
const each = document.getElementById('each');
const each_tip = document.getElementById('tip-each');



calculate.onclick = (e) => {
  const tip_total = amount.value * percent.value / 100;
  tip.innerHTML = tip_total;
  const total_total = parseFloat(amount.value) + parseFloat(tip_total);
  total.innerHTML = total_total;
  const each_amount = total_total / people.value;
  each.innerHTML = each_amount;
  const each_tip_amount = tip_total / people.value;
  each_tip.innerHTML = each_tip_amount
};
