function showReview() {
    const studentFirstName = document.getElementById('studentFirstName').value;
    const studentLastName = document.getElementById('studentLastName').value;
    const studentBirthDate = document.getElementById('studentBirthDate').value;
    const studentGender = document.getElementById('studentGender').value;
    const parentFullName = document.getElementById('parentFullName').value;
    const parentEmailAddress = document.getElementById('parentEmailAddress').value;
    const parentPhoneNumber = document.getElementById('parentPhoneNumber').value;
    const addressLineOne = document.getElementById('addressLineOne').value;
    const addressLineTwo = document.getElementById('addressLineTwo').value;
    const cityTown = document.getElementById('cityTown').value;
    const stateProvince = document.getElementById('stateProvince').value;
    const postalCode = document.getElementById('postalCode').value;

    const reviewContent = document.getElementById('reviewContent');
    reviewContent.innerHTML = `
        <div class="review-item"><span class="review-label">First Name:</span> ${studentFirstName}</div>
        <div class="review-item"><span class="review-label">Last Name:</span> ${studentLastName}</div>
        <div class="review-item"><span class="review-label">Date of Birth:</span> ${studentBirthDate}</div>
        <div class="review-item"><span class="review-label">Gender:</span> ${studentGender}</div>
        <div class="review-item"><span class="review-label">Parent/Guardian Name:</span> ${parentFullName}</div>
        <div class="review-item"><span class="review-label">Email:</span> ${parentEmailAddress}</div>
        <div class="review-item"><span class="review-label">Phone Number:</span> ${parentPhoneNumber}</div>
        <div class="review-item"><span class="review-label">Address Line 1:</span> ${addressLineOne}</div>
        ${addressLineTwo ? `<div class="review-item"><span class="review-label">Address Line 2:</span> ${addressLineTwo}</div>` : ''}
        <div class="review-item"><span class="review-label">City/Town:</span> ${cityTown}</div>
        <div class="review-item"><span class="review-label">State/Province:</span> ${stateProvince}</div>
        <div class="review-item"><span class="review-label">Postal Code:</span> ${postalCode}</div>
    `;

    document.getElementById('reviewDetails').style.display = 'block';
    document.querySelector('button[type="submit"]').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('reviewDetails').style.display = 'none';
});