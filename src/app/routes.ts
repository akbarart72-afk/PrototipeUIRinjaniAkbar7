import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { HomePage } from "./pages/HomePage";
import { TrailDetailPage } from "./pages/TrailDetailPage";
import { PetaPage } from "./pages/PetaPage";
import { SejarahPage } from "./pages/SejarahPage";
import { KontakPage } from "./pages/KontakPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "jalur/:trailId", Component: TrailDetailPage },
      { path: "peta", Component: PetaPage },
      { path: "sejarah", Component: SejarahPage },
      { path: "kontak", Component: KontakPage },
    ],
  },
]);
