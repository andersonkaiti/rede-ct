export function RedLine() {
  return (
    <div className="mb-4 flex items-center justify-center space-x-2">
      <div className="h-1 w-8 rounded-full bg-gradient-to-r from-orange-500 to-red-500"></div>
      <div className="h-1 w-4 rounded-full bg-gradient-to-r from-orange-400 to-red-400"></div>
      <div className="h-1 w-2 rounded-full bg-gradient-to-r from-orange-300 to-red-300"></div>
    </div>
  );
}
