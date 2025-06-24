export const getUserAccountProfileColor = (initial) => {
  const colorMap = {
    A: "bg-red-500",
    B: "bg-blue-500",
    C: "bg-green-500",
    D: "bg-yellow-500",
    E: "bg-pink-500",
    F: "bg-purple-500",
    G: "bg-indigo-500",
    H: "bg-teal-500",
    I: "bg-orange-500",
    J: "bg-lime-500",
    K: "bg-rose-500",
    L: "bg-cyan-500",
    M: "bg-emerald-500",
    N: "bg-violet-500",
    O: "bg-sky-500",
    P: "bg-fuchsia-500",
    Q: "bg-amber-500",
    R: "bg-gray-500",
    S: "bg-blue-700",
    T: "bg-green-700",
    U: "bg-pink-700",
    V: "bg-purple-700",
    W: "bg-indigo-700",
    X: "bg-teal-700",
    Y: "bg-orange-700",
    Z: "bg-lime-700",
  };
  const upperInitial = initial?.toUpperCase() || "A";
  return colorMap[upperInitial] || "bg-gray-400";
};
