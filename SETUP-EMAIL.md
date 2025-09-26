# Configuración del formulario de contacto con Gmail

## Pasos para configurar el envío de correos:

1. **Habilitar verificación en 2 pasos en Gmail:**
   - Ve a [myaccount.google.com](https://myaccount.google.com)
   - Seguridad → Verificación en 2 pasos → Activar

2. **Generar una contraseña de aplicación:**
   - En la misma sección de Seguridad
   - Contraseñas de aplicaciones
   - Selecciona "Correo" y "Otro (nombre personalizado)"
   - Escribe "Portfolio Website"
   - Copia la contraseña generada (16 caracteres)

3. **Actualizar el archivo `.env.local`:**
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=marcmclara@gmail.com
   SMTP_PASSWORD=aqui_tu_contraseña_de_aplicacion
   SMTP_FROM=marcmclara@gmail.com
   CONTACT_RECIPIENT=marcmclara@gmail.com
   ```

4. **Reiniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

## Solución de problemas:

- Si sigue sin funcionar, asegúrate de que las variables de entorno estén correctamente configuradas
- Verifica que la contraseña de aplicación sea correcta (no uses tu contraseña normal de Gmail)
- El archivo `.env.local` no se sube a Git por seguridad

## Archivos modificados:
- ✅ `.env.local` - Variables de entorno (añadir contraseña real)
- ✅ `.env.example` - Ejemplo de configuración
- ✅ `public/favicon.svg` - Favicon agregado
- ✅ `src/app/layout.tsx` - Configuración del favicon
- ✅ `@types/nodemailer` - Tipos instalados