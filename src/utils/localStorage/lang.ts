import { Langs } from "../../data/keys";

export default function langLSControl(
  type: "get" | "save",
  data?: Langs
): Langs {
  const key = "lang";

  switch (type) {
    case "get":
      let value = localStorage.getItem(key);
      if (
        !value ||
        value === undefined ||
        !(value === "en" || value === "ru")
      ) {
        langLSControl("save", "en");
        return "en";
      }
      return value;
    case "save":
      if (data === undefined || !(data === "en" || data === "ru"))
        throw new Error("indalid data");
      localStorage.setItem(key, data);
      return data;
    default:
      throw new Error("invalid type");
  }
}
