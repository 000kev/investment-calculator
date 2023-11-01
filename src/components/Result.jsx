import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result({ variables }) {
  const annual_data = calculateInvestmentResults({
    initialInvestment: variables.initial,
    annualInvestment: variables.annual,
    expectedReturn: variables.return,
    duration: variables.duration,
  });
  const deriveInterest = (index) => {
    let result = 0;
    if (index === 0) result=annual_data[index].interest;
    else for (let i=0; i<=index; i++) {
        result+=annual_data[i].interest;
    }
    return result;
  }
//   console.log(annual_data);
  let results = annual_data.map((entry, index) => 
    (<tr key={entry.year}>
        <td>{entry.year}</td>
        <td>{formatter.format(entry.valueEndOfYear)}</td>
        <td>{formatter.format(entry.interest)}</td>
        <td>{formatter.format(deriveInterest(index))}</td>
        <td>{formatter.format(entry.valueEndOfYear-deriveInterest(index))}</td>
      </tr>)
  );
//   console.log(results);
  return (
    <table id="result" className="center">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results}
      </tbody>
    </table>
  );
}
