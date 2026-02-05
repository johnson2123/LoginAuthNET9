import { useState } from "react";
import { submitDocuments } from "../services/authService";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";


export default function DocumentForm({ setIsAuthenticated }) {

    const username = localStorage.getItem("username");
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        setIsAuthenticated(false);
        navigate("/");
    }
    const documentLabels = [

        "Academic Regulations",
        "Student Registrations",
        "Notification Issued",
        "Request Sent for Evaluators",
        "Request Sent to Question Papers",
        "Timetable Issued",
        "Answer Booklet Data Sent to Printing",
        "Answer Booklet Printing Completed",
        "Barcodes Data Received",
        "Attendance & Concessions",
        "Galleys Sent to Co-Ordinator’s",
        "Uploading of Hall-Tickets",
        "Statistics to Honorable Vice Chancellor",
        "Barcodes Data Received",
        "Scanning of Answer Booklets Completed",
        "Reconciliation of Absentees and RMC Students",
        "RMC Committee Conducted",
        "Question Papers and Answer Keys",
        "Evaluators List Received",
        "Valuation of Scripts Completed",
        "External Marks Received",
        "Result Processing Completed",
        "Proceedings Related to Students",
        "CRC Committee Conducted",
        "Results Published & Covering Letter",
        "Communication of Result Published Notice & Statistics to Deans",
        "Last Date for Script Verification",
        "Last Date for Applying Re-Valuation",
        "Revaluation Applied Data Sent to Evaluation",
        "Re-Revaluation Scripts Data Sent to Evaluation",
        "Revaluation of Scripts Completed",
        "Re-Revaluation of Scripts Completed",
        "Revaluation Results Published",
        "Statistics Sent to Deans After Revaluation.",
        "Final Grade & SGPA CGPA",
        "Final Result Copy After Revaluation",
        "Uploading All data to Cloud",

    ];

    const [documents, setDocuments] = useState(
        documentLabels.map((label, i) => ({
            serialNo: i + 1,
            documentName: label,
            date: "",
            softCopy: false,
            hardCopy: false,
        }))
    );

    const handleChange = (index, field, value) => {
        const updatedDocs = [...documents];
        updatedDocs[index][field] = value;
        setDocuments(updatedDocs);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await submitDocuments(documents);
            alert("Document submitted successfully");
        } catch (err) {
            alert("Error submitting documents: " + (err.message || err));
        }
    };

    return (
        <>
            <Navbar username={username} onLogout={handleLogout} />

            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-8 rounded shadow-md w-full max-w-6xl"
                >
                    <h2 className="text-2xl font-bold mb-6 text-center">
                        Document Submission Form
                    </h2>


                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-300">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="border px-4 py-2">S.No</th>
                                    <th className="border px-4 py-2">Document Name</th>
                                    <th className="border px-4 py-2">Date</th>
                                    <th className="border px-4 py-2">Soft Copy</th>
                                    <th className="border px-4 py-2">Hard Copy</th>
                                </tr>
                            </thead>
                            <tbody>
                                {documents.map((doc, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="border px-4 py-2 font-semibold">
                                            {doc.serialNo}
                                        </td>
                                        <td className="border px-4 py-2">{doc.documentName}</td>
                                        <td className="border px-4 py-2">
                                            <input
                                                type="date"
                                                value={doc.date}
                                                onChange={(e) =>
                                                    handleChange(index, "date", e.target.value)
                                                }
                                                className="border p-2 rounded w-full"
                                                required
                                            />
                                        </td>
                                        <td className="border px-4 py-2 text-center">
                                            <input
                                                type="checkbox"
                                                checked={doc.softCopy}
                                                onChange={(e) =>
                                                    handleChange(index, "softCopy", e.target.checked)
                                                }
                                            />
                                        </td>
                                        <td className="border px-4 py-2 text-center">
                                            <input
                                                type="checkbox"
                                                checked={doc.hardCopy}
                                                onChange={(e) =>
                                                    handleChange(index, "hardCopy", e.target.checked)
                                                }
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>


                    <button
                        type="submit"
                        className="mt-6 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
}