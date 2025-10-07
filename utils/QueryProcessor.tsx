export default function QueryProcessor(query: string): string {
  // Convert query to lowercase for case-insensitive matching
  const normalizedQuery = query.toLowerCase();

  // Handle name query
  if (normalizedQuery.includes("what is your name")) {
    return "GitHub Copilot";
  }

  // Handle addition queries
  const additionMatch = normalizedQuery.match(/what is (\d+) plus (\d+)\?/);
  if (additionMatch) {
    const num1 = parseInt(additionMatch[1]);
    const num2 = parseInt(additionMatch[2]);
    return String(num1 + num2);
  }

  // Handle largest number queries
  const largestMatch = normalizedQuery.match(/which of the following numbers is the largest: ([0-9, ]+)\?/);
  if (largestMatch) {
    const numbers = largestMatch[1].split(',').map(num => parseInt(num.trim()));
    return String(Math.max(...numbers));
  }

  return "";
}
