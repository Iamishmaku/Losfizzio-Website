import { ImageResponse } from "next/og";
import { site } from "@/data/site";
import { PizzaArt } from "@/components/ui/PizzaArt";

export const alt = `${site.name} · Pizzeria in piazza a Dro`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        background: "#fbf3e4",
        padding: "0 0 0 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", width: 640 }}>
        <div
          style={{
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#c8321f",
            fontWeight: 700,
          }}
        >
          Pizzeria · Kebab · Bar · Caffè
        </div>
        <div
          style={{
            fontSize: 132,
            fontWeight: 800,
            color: "#22180f",
            lineHeight: 1,
            marginTop: 20,
            letterSpacing: -4,
          }}
        >
          {site.name}
        </div>
        <div style={{ fontSize: 44, color: "#5a4a3b", marginTop: 24 }}>{site.tagline}</div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            padding: "14px 28px",
            borderRadius: 999,
            background: "#c8321f",
            color: "#fffaf1",
            fontSize: 30,
            fontWeight: 700,
            alignSelf: "flex-start",
          }}
        >
          {`Asporto · ${site.contacts.phoneDisplay}`}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          right: -120,
          top: 15,
          width: 600,
          height: 600,
          display: "flex",
        }}
      >
        <PizzaArt seed="og" size={600} toppings={["tomato", "mozzarella", "basil", "salami", "olive"]} />
      </div>
    </div>,
    size,
  );
}
