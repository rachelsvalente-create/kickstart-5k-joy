# CorridaKickstart™ - Tema WordPress

## 📦 O QUE ESTÁ INCLUÍDO

Este pacote contém todos os arquivos necessários para criar um tema WordPress personalizado para a landing page do CorridaKickstart™.

### Arquivos do Tema:
- `style.css` - Estilos do tema (RENOMEAR para style.css ao usar)
- `functions.php` - Funções e configurações do tema (RENOMEAR para functions.php ao usar)
- `header.php` - Cabeçalho do site (RENOMEAR para header.php ao usar)
- `footer.php` - Rodapé do site (RENOMEAR para footer.php ao usar)
- `index.php` - Template padrão (RENOMEAR para index.php ao usar)
- `page-landing.php` - Template da landing page (RENOMEAR para page-landing.php ao usar)

## 🚀 INSTALAÇÃO

### Passo 1: Preparar os Arquivos
1. Crie uma pasta chamada `corridakickstart` no seu computador
2. Copie o conteúdo de cada arquivo .txt e cole em novos arquivos SEM a extensão .txt:
   - `style.css.txt` → `style.css`
   - `functions.php.txt` → `functions.php`
   - `header.php.txt` → `header.php`
   - `footer.php.txt` → `footer.php`
   - `index.php.txt` → `index.php`
   - `page-landing.php.txt` → `page-landing.php`

### Passo 2: Upload do Tema
1. Comprima a pasta `corridakickstart` em um arquivo .zip
2. No WordPress, vá em **Aparência > Temas > Adicionar Novo > Enviar Tema**
3. Faça upload do arquivo .zip
4. Ative o tema

### Passo 3: Criar a Landing Page
1. Vá em **Páginas > Adicionar Nova**
2. Título: "Home" ou "Landing Page"
3. No painel direito, em **"Atributos da Página"**, selecione:
   - Template: **Landing Page CorridaKickstart**
4. Ainda no painel direito, você verá um campo **"Link do Botão CTA"**
5. Cole sua URL de pagamento (ex: `https://pay.hotmart.com/...`)
6. Clique em **Publicar**

### Passo 4: Definir como Página Inicial
1. Vá em **Configurações > Leitura**
2. Em "Sua página inicial exibe", selecione **"Uma página estática"**
3. Escolha a página que você criou
4. Salve as alterações

## ⚙️ CONFIGURAÇÕES

### Trocar o Link do Botão CTA
1. Edite a página da landing
2. No painel lateral direito, encontre **"Link do Botão CTA"**
3. Cole a nova URL
4. Atualize a página

### Adicionar a Imagem Hero
1. Você precisa adicionar uma imagem chamada `hero-runner.jpg` na pasta `assets` do tema
2. Caminho: `/wp-content/themes/corridakickstart/assets/hero-runner.jpg`
3. Ou edite o arquivo `style.css` e altere a URL da imagem de fundo na classe `.hero-section`

### Personalizar Cores
Edite o arquivo `style.css` na seção `:root`:
```css
:root {
  --primary: 16 100% 60%;        /* Cor primária (laranja) */
  --secondary: 210 65% 40%;      /* Cor secundária (azul) */
  --accent: 16 100% 50%;         /* Cor de destaque */
}
```

## 📝 ADICIONAR DEPOIMENTOS REAIS

### Opção 1: Editar Diretamente o Template
1. Edite o arquivo `page-landing.php`
2. Encontre a seção `<!-- Testimonials Section -->`
3. Substitua os depoimentos de exemplo por reais

### Opção 2: Usar Custom Post Type (Recomendado)
O tema já inclui um Custom Post Type para Depoimentos:
1. No WordPress, vá em **Depoimentos > Adicionar Novo**
2. Título: Nome da pessoa
3. Conteúdo: Depoimento
4. Imagem destacada: Foto da pessoa
5. Publique

Para exibir os depoimentos:
- Edite `page-landing.php`
- Substitua os depoimentos estáticos por um loop do WordPress

## 🎨 CUSTOMIZAÇÕES COMUNS

### Mudar Título e Subtítulo do Hero
Edite `page-landing.php`, linha ~15-20

### Alterar Preço
Edite `page-landing.php`, procure por "R$ 27" e "R$ 445"

### Adicionar/Remover Seções
Cada seção está claramente marcada com comentários HTML:
```html
<!-- Nome da Section -->
```
Você pode comentar ou deletar seções inteiras

## 🔧 SUPORTE TÉCNICO

### Problemas Comuns:

**Tema não aparece após upload:**
- Verifique se todos os arquivos estão na raiz da pasta (não em subpasta)
- Certifique-se que o `style.css` está presente e com o cabeçalho correto

**Botão CTA não funciona:**
- Verifique se você configurou o link na página
- Vá em Páginas > Editar > Campo "Link do Botão CTA" no painel lateral

**Estilos não aplicam:**
- Limpe o cache do navegador (Ctrl + F5)
- Se usar plugin de cache, limpe o cache do WordPress

## 📱 RESPONSIVIDADE

O tema é 100% responsivo e funciona em:
- Desktop (1920px+)
- Laptop (1024px - 1920px)
- Tablet (768px - 1024px)
- Mobile (320px - 768px)

## 🔒 SEGURANÇA

- Todos os campos são sanitizados
- Links externos com target seguro
- Nonces implementados nos formulários
- Validação de permissões

## 📈 PRÓXIMOS PASSOS

1. **Instalar plugin de SEO**: Yoast SEO ou Rank Math
2. **Configurar Analytics**: Google Analytics ou similar
3. **Adicionar pixel de conversão**: Facebook, Google Ads
4. **Otimizar imagens**: Use plugins como Smush ou ShortPixel
5. **Configurar formulários**: Contact Form 7 ou WPForms (se necessário)

## 💡 DICAS

- Teste em diferentes dispositivos antes de lançar
- Use ferramentas como Google PageSpeed para otimização
- Adicione certificado SSL (https://)
- Configure backup automático
- Teste todos os links do CTA

## 📞 NEED HELP?

Se você tiver dificuldades:
1. Procure tutoriais sobre instalação de temas WordPress
2. Consulte a documentação oficial do WordPress
3. Contrate um desenvolvedor WordPress para ajustar detalhes específicos

---

**Versão:** 1.0
**Última atualização:** 2025

Boa sorte com suas vendas! 🚀
