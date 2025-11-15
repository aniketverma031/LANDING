export async function GET() {
  return Response.json({
    courses: [
      {
        name: "B.Tech",
        feeRange: "₹1,50,000 - ₹2,50,000"
      },
      {
        name: "MBA",
        feeRange: "₹2,00,000 - ₹3,50,000"
      },
      {
        name: "BBA",
        feeRange: "₹1,00,000 - ₹1,80,000"
      },
      {
        name: "M.Tech",
        feeRange: "₹1,80,000 - ₹2,80,000"
      }
    ]
  });
}
