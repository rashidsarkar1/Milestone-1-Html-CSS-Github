import jsPDF from "jspdf";

function viewPDF(pdfUrl) {
  const doc = new jsPDF();

  doc.text(20, 20, "Your PDF Title");

  // Assuming you want to load the PDF from a URL
  const pdfSource = pdfUrl;

  doc.addPage();
  doc.text(20, 20, "Page 2 Content");

  doc.addPage();
  doc.text(20, 20, "Page 3 Content");

  // Output the PDF in a new browser window
  doc.output("dataurlnewwindow");
}
export default viewPDF;
