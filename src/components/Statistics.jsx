const getRandomColor = () => {
  const colors = [
    '#FF6B6B',
    '#4ECDC4',
    '#45B7D1',
    '#FFA07A',
    '#98D8C8',
    '#F7DC6F',
    '#BB8FCE',
    '#85C1E2',
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

export const Statistics = ({ stats }) => {
  return (
    <section class="statistics">
      <h2 class="title">Upload stats</h2>

      <ul class="stat-list">
        {stats.map(item => (
          <li
            key={item.id}
            class="item"
            style={{ backgroundColor: getRandomColor() }}
          >
            <span class="label">{item.label}</span>
            <span class="percentage">{item.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
