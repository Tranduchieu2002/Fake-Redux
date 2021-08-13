import html from "../src/core.js";
const links = [
  "https://www.facebook.com/profile.php?id=100045972682678",
  "https://www.instagram.com/cuhieu04112002/",
  "https://www.facebook.com/profile.php?id=100045972682678",
  "https://www.facebook.com/profile.php?id=100045972682678",
  "https://www.facebook.com/profile.php?id=100045972682678",
];
const classes = ["btn-fb", "btn-tw", "btn-dribbble"];
const icons = [
  ' <i class="fab fa-facebook-f"> </i>',
  '<i class="fab fa-instagram"></i>',
  '<i class="fab fa-google-plus-g"> </i>  ',
  ' <i class="fab fa-linkedin-in"> </i>',
  ' <i class="fab fa-dribbble"> </i>',
];
const info = {
  links: links,
  icons: icons,
};
export default function footer() {
  return html`
    <footer class="page-footer font-small special-color-dark pt-4">
      <div class="container">
        <ul class="list-unstyled list-inline text-center">
          ${links.map(
            (link, index) => `
           <li  class="list-inline-item"> <a target="_blank" class="btn-floating ${classes[index]} mx-1" href="${link}"> 
           ${icons[index]}
        </a></li>`
          )}
        </ul>
      </div>
    </footer>
  `;
}
