"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from "next/navigation";
import ResumeViewer from "@/app/containers/ResumePreviewer";
import { fetchAllResumes } from "@/app/lib/resumeThunks";
import Modal from "@/app/components/Utils/Modal";

const AdminDashboard = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { resumes, status, error } = useSelector(state => state.resume);
    const [selectedResumeId, setSelectedResumeId] = useState(null);
    const [filter, setFilter] = useState('');
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
      const checkAuth = async () => {
        const res = await fetch("/api/check-auth");
        if (res.ok) {
          setIsAuthorized(true);
          dispatch(fetchAllResumes());
        } else {
          router.push("/");
        }
      };
      checkAuth();
    }, [dispatch, router]);
    
    // Fonction pour voir les détails du CV
    const handleViewResume = (id, e) => {
      // Empêcher la propagation pour éviter que le clic sur le bouton déclenche également le clic sur la ligne
      if (e) {
        e.stopPropagation();
      }
      setSelectedResumeId(id);
      setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedResumeId(null);
    };
    
    // Fonction pour formater la date
    const formatDate = (dateString) => {
      if (!dateString) return "Non disponible";
      const date = new Date(dateString);
      return date.toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    };
    
    if (!isAuthorized) return null;
    
    const filteredResumes = filter
      ? resumes.filter(resume => resume.contract_type === filter)
      : resumes;
      
    return (
      <div className="h-screen flex flex-col bg-gray-100 relative">
        {/* Contenu principal */}
        <div className="flex flex-col justify-center items-center flex-grow">
          <button
            onClick={async () => {
              await fetch("/api/logout", { method: "POST" });
              router.push("/");
            }}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mt-5 rounded"
          >
            Se déconnecter de cette page
          </button>
          <h1 className="text-3xl font-bold mb-4 text-center mt-10">Dashboard Admin</h1>
          <p className="text-lg mb-4 text-center">Liste des CV récupérés :</p>
          <div className="mb-4">
            <label className="mr-2">Filtrer par type de contrat :</label>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border p-2 rounded"
            >
              <option key="all" value="">Tous</option>
              <option key="stage" value="stage">Stage</option>
              <option key="contrat-apprentissage" value="contrat-apprentissage">Alternance</option>
              <option key="cdi/cdd" value="cdi/cdd">CDI/CDD</option>
            </select>
          </div>
          {status === 'loading' && <p>Chargement des CV...</p>}
          {status === 'failed' && <p className="text-red-500">Erreur : {error}</p>}
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
                    {filteredResumes.map((resume, index) => (
                    <tr
                        key={resume.id || `resume-${index}`}
                        className="border-t hover:bg-gray-100"
                    >
                        <td className="p-2 text-center">{resume.last_name}</td>
                        <td className="p-2 text-center">{resume.first_name}</td>
                        <td className="p-2 text-center">{resume.email}</td>
                        <td className="p-2 text-center">{resume.contract_type}</td>
                        <td className="p-2 text-center">{formatDate(resume.uploaded_at)}</td>
                        <td className="p-2 text-center">
                          <button 
                            onClick={(e) => handleViewResume(resume.id || index, e)}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded text-sm"
                          >
                            Voir le CV
                          </button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
        {/* Modal pour afficher le CV */}
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
            <ResumeViewer resumeId={selectedResumeId} />
        </Modal>
      </div>
    );
};

export default AdminDashboard;
