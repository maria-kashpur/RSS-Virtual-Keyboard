export default function langLSControl(type: "get" | "save", data?: string) {
  const key = "lang";

  switch (type) {
    case "get":
      const value = localStorage.getItem(key);
      if (value === undefined) {
        langLSControl("save", "en")
        return "en";
      }
      if (!(value === "ru" || value === "en")) throw new Error("invalid value")
      return value
    case "save": 
      if (!(data === "ru" || data === "en")) throw new Error("invalid value")
      localStorage.setItem(key, data);
      break
    default:
      throw new Error("invalid type")
  }
}