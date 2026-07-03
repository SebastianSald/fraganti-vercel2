// ============================================================================
// CATÁLOGO DE PERFUMES — FRAGANTI
// ============================================================================
// Este es el ÚNICO archivo que necesitas tocar para:
//   1. Cambiar el NOMBRE de un perfume
//   2. Cambiar el PRECIO
//   3. Cambiar la FOTO (ver instrucciones abajo)
//   4. Agregar o quitar perfumes del catálogo
//
// -------------------------------------------------------------------------
// CÓMO CAMBIAR UNA FOTO
// -------------------------------------------------------------------------
// 1. Guarda tu foto en la carpeta:  public/images/
//    (usa formato .jpg o .png, y un nombre sin espacios ni tildes,
//     por ejemplo: "oud-noir.jpg")
// 2. En el producto que quieras cambiar, escribe ese mismo nombre en "img".
//    Ejemplo:  img: "oud-noir.jpg"
// 3. Guarda el archivo y sube los cambios a GitHub. Vercel lo despliega solo.
//
// Ahora mismo cada producto usa una imagen "placeholder" (marcador) elegante
// mientras no tengas la foto real, para que el sitio NUNCA se vea roto.
// Puedes ir reemplazándolas una por una, a tu propio ritmo.
//
// -------------------------------------------------------------------------
// CÓMO AGREGAR UN PERFUME NUEVO
// -------------------------------------------------------------------------
// Copia un bloque { ... } completo, pégalo antes del cierre "];", cambia el
// "id" por uno que no se repita, y edita los datos.
//
// CAMPOS:
//   id       -> número único (no lo repitas)
//   name     -> nombre del perfume
//   notes    -> notas olfativas, separadas por comas
//   price    -> precio, como texto (ej: "$85.000")
//   family   -> familia olfativa: "Oriental" | "Floral" | "Amaderada" | "Fresca" | "Floral Oriental"
//   type     -> categoría comercial: "Árabe" | "Diseñador"
//   img      -> nombre del archivo dentro de public/images/
//   isNew    -> true si quieres la etiqueta "NUEVO" (opcional, si no la quieres, bórralo)
// ============================================================================

export type Product = {
  id: number;
  name: string;
  notes: string;
  price: string;
  family: "Oriental" | "Floral" | "Amaderada" | "Fresca" | "Floral Oriental";
  type: "Árabe" | "Diseñador";
  img: string;
  isNew?: boolean;
};

export const PRODUCTS: Product[] = [
  // ---------------- ÁRABES ----------------
  { id: 1, name: "Oud Noir", notes: "ámbar, oud, sándalo", price: "$85.000", family: "Oriental", type: "Árabe", img: "fraganti-prod-arabe-oriental.jpg", isNew: true },
  { id: 2, name: "Amber Al Sultan", notes: "ámbar, azafrán, cuero", price: "$98.000", family: "Oriental", type: "Árabe", img: "fraganti-prod-arabe-oriental.jpg" },
  { id: 3, name: "Bade'e Al Oud", notes: "oud, rosa, especias", price: "$105.000", family: "Oriental", type: "Árabe", img: "fraganti-prod-arabe-oriental.jpg" },
  { id: 4, name: "Khaltat Malaki", notes: "incienso, madera, almizcle", price: "$110.000", family: "Amaderada", type: "Árabe", img: "fraganti-prod-arabe-amaderada.jpg", isNew: true },
  { id: 5, name: "Ameer Al Oudh", notes: "sándalo, cedro, oud", price: "$99.000", family: "Amaderada", type: "Árabe", img: "fraganti-prod-arabe-amaderada.jpg" },
  { id: 6, name: "Rose Nebras", notes: "rosa damascena, azafrán, almizcle", price: "$92.000", family: "Floral", type: "Árabe", img: "fraganti-prod-arabe-floral.jpg" },
  { id: 7, name: "Zahra Al Layl", notes: "jazmín, ámbar blanco, vainilla", price: "$88.000", family: "Floral", type: "Árabe", img: "fraganti-prod-arabe-floral.jpg" },

  // ---------------- DISEÑADOR ----------------
  { id: 8, name: "Fleur de Jasmin", notes: "jazmín, rosa, almizcle", price: "$72.000", family: "Floral", type: "Diseñador", img: "fraganti-prod-disenador-floral.jpg" },
  { id: 9, name: "La Vie Est Belle", notes: "iris, pralinée, vainilla", price: "$78.000", family: "Floral Oriental", type: "Diseñador", img: "fraganti-prod-disenador-floral.jpg" },
  { id: 10, name: "Black Orchid", notes: "orquídea, vainilla, pachulí", price: "$92.000", family: "Floral Oriental", type: "Diseñador", img: "fraganti-prod-disenador-floral.jpg" },
  { id: 11, name: "Aventus Club", notes: "manzana, bergamota, cedro", price: "$95.000", family: "Fresca", type: "Diseñador", img: "fraganti-prod-disenador-fresca.jpg" },
  { id: 12, name: "Light Blue", notes: "limón, manzana, cedro", price: "$79.000", family: "Fresca", type: "Diseñador", img: "fraganti-prod-disenador-fresca.jpg" },
  { id: 13, name: "Terre d'Hermès", notes: "pomelo, pimienta, vetiver", price: "$110.000", family: "Amaderada", type: "Diseñador", img: "fraganti-prod-disenador-amaderada.jpg", isNew: true },
  { id: 14, name: "Sauvage", notes: "bergamota, pimienta, ámbar gris", price: "$115.000", family: "Amaderada", type: "Diseñador", img: "fraganti-prod-disenador-amaderada.jpg" },
];
