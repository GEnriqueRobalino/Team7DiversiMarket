import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import { hover } from "@testing-library/user-event/dist/hover";

const pages = [
  { titulo: "Clientes", direccion: "clientes" },
  { titulo: "Gestión de Clientes", direccion: "/gestion-clientes" },
  { titulo: "Clientes por Ciudad", direccion: "/clientes-por-ciudad" },
  { titulo: "Productos", direccion: "/productos" },
  { titulo: "Gestion de Productos", direccion: "/productos/crear-actualizar-eliminar" },
  { titulo: "Días de Expiración", direccion: "/productos/dias-para-expiracion" },
  { titulo: "Expiración de Producto", direccion: "/productos/expiracion" },
  { titulo: "Utilidad de Producto", direccion: "/productos/utilidad" },
];

function Navbar() {
  return (
    <AppBar position="static" sx={{marginBottom: 3}}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex", justifyContent: "space-between" } }}>
            {pages.map((page) => (
              <Button  href={page.direccion} sx={{
                "&:hover":{
                    transform: "translateY(-3px)",
                    transition: "0.5s"
                }
              }}>
                <Typography
                
                key={page.titulo}
                sx={{ my: 2, color: "white", display: "block", fontSize: "12px" }}
                
              >
                {page.titulo}
              </Typography>
              </Button>
            ))}
             <Button  href={"/"} >
                <Typography
                
                sx={{ color: "white", display: "block", fontSize: "12px", "&:hover":{
                    color: "red",
                    fontWeight:"600"
                }}}
                
              >
                Cerrar Sesión
              </Typography>
              </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;