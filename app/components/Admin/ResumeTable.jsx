import { useState, useEffect } from "react";

const ResumeTable = ({ resumes, handleViewResume, formatDate }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20; // Nombre d'éléments par page

  // Debug logs
  useEffect(() => {
    console.log("Resumes received in ResumeTable:", resumes);
  }, [resumes]);

  // Reset to first page when resumes change
  useEffect(() => {
    setCurrentPage(1);
  }, [resumes]);

  // Calcul du nombre total de pages
  const totalPages = Math.ceil((resumes?.length || 0) / itemsPerPage);

  // Extraction des CV pour la page actuelle
  const currentResumes = resumes ? resumes.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) : [];

  // Gestion de la pagination
  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Modified empty state check
  if (!resumes || (Array.isArray(resumes) && resumes.length === 0)) {
    return (
      <div className="w-full bg-white shadow-md rounded-lg p-8 text-center">
        <div className="text-gray-500 mb-2">📄</div>
        <p className="text-gray-600">Aucun CV disponible</p>
        <p className="text-sm text-gray-500 mt-2">Les CV apparaîtront ici une fois qu&apos;ils seront ajoutés.</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 text-center">Nom</th>
            <th className="p-2 text-center">Prénom</th>
            <th className="p-2 text-center">E-mail</th>
            <th className="p-2 text-center">Type de contrat</th>
            <th className="p-2 text-center">Date d&apos;inscription</th>
            <th className="p-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentResumes.map((resume, index) => {
            // Calculate the actual index in the full array by adding the offset from the current page
            const actualIndex = (currentPage - 1) * itemsPerPage + index;
            const uniqueKey = `resume-${actualIndex}`;
            
            return (
              <tr key={uniqueKey} className="border-t hover:bg-gray-100">
                <td className="p-2 text-center">{resume.last_name || 'Non spécifié'}</td>
                <td className="p-2 text-center">{resume.first_name || 'Non spécifié'}</td>
                <td className="p-2 text-center">{resume.email || 'Non spécifié'}</td>
                <td className="p-2 text-center">{resume.contract_type || 'Non spécifié'}</td>
                <td className="p-2 text-center">{formatDate(resume.uploaded_at)}</td>
                <td className="p-2 text-center">
                  <button
                    onClick={(e) => handleViewResume(uniqueKey, e)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded text-sm"
                  >
                    Voir le CV
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-4 space-x-4">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className={`px-3 py-1 border rounded ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-700"}`}
          >
            Précédent
          </button>
          <span className="font-bold">
            Page {currentPage} / {totalPages}
          </span>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 border rounded ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-700"}`}
          >
            Suivant
          </button>
        </div>
      )}
    </div>
  );
};

export default ResumeTable;