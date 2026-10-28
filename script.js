// 1. Cart Feature
let count = 0;
function addCart(){
    count++;
    document.getElementById('cart').innerText = count;
    // small animation feedback
    alert('Added to cart! Total items: ' + count);
}

// 2. Menu Filter Feature
function filterMenu(cat, btn){
    document.querySelectorAll('.filters button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.card').forEach(c => {
        c.style.display = (cat === 'all' || c.dataset.cat === cat) ? 'block' : 'none';
    });
}

// 3. Dark/Light Mode Toggle
function toggleTheme(){
    document.body.classList.toggle('light');
    localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
}
// Load saved theme
if(localStorage.getItem('theme') === 'light'){
    document.body.classList.add('light');
}

// 4. Testimonial Slider
const reviews = [
    {q:'"Best coffee in town! Super fast delivery."', a:"- Ahmed, Peshawar"},
    {q:'"The cold brew is so smooth, my daily fix."', a:"- Sara, Islamabad"},
    {q:'"Lovely ambiance and great croissants!"', a:"- Bilal, Lahore"}
];
let r = 0;
function nextTestimonial(){
    r = (r + 1) % reviews.length;
    document.getElementById('quote').innerText = reviews[r].q;
    document.getElementById('author').innerText = reviews[r].a;
}

// 5. Form Validation
function validateForm(){
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    
    if(name === "" || email === ""){
        alert("Please fill name and email");
        return false;
    }
    if(!email.includes('@')){
        alert("Please enter a valid email");
        return false;
    }
    document.getElementById('formMsg').innerText = "✅ Message sent successfully! We will contact you soon.";
    return false; // prevent actual reload for demo
}