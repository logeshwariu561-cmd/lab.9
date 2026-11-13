//use knowledge_repo;

// Insert organizational documents
db.documents.insertMany([
  { docId: "D1", title: "Remote Work Policy", category: "HR", content: "Guidelines and expectations for working from home and hybrid setups." },
  { docId: "D2", title: "Data Security Guidelines", category: "IT", content: "Mandatory protocols for password management and handling confidential client information." },
  { docId: "D3", title: "Expense Reimbursement", category: "Finance", content: "Procedure for submitting travel bills and monthly operational expense claims." }
]);

// Create text index
db.documents.createIndex({ title: "text", content: "text" });

// Search repository for security guidelines
db.documents.find(
  { $text: { $search: "security confidential" } },
  { score: { $meta: "textScore" } }
).sort({ score: { $meta: "textScore" } });
