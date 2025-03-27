"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from "next/navigation";
import ResumeViewer from "@/app/components/Admin/ResumePreviewer";
import { fetchAllResumes } from "@/app/lib/resumeThunks";
import Modal from "@/app/components/Utils/Modal";
import ResumeTable from "@/app/components/Admin/ResumeTable";

const AdminDashboard = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { resumes, status, error } = useSelector(state => state.resume);
    const [selectedResumeId, setSelectedResumeId] = useState(null);
    const [filter, setFilter] = useState('');
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentResume, setCurrentResume] = useState(null);
    const [showPreview, setShowPreview] = useState(false);

    useEffect(() => {
      const checkAuth = async () => {
        try {
          const res = await fetch("/api/check-auth");
          if (res.ok) {
            setIsAuthorized(true);
            console.log("Fetching resumes...");
            const result = await dispatch(fetchAllResumes());
            console.log("Resumes fetch result:", result);
          } else {
            router.push("/");
          }
        } catch (error) {
          console.error("Erreur lors de la vérification de l'authentification:", error);
          router.push("/");
        }
      };
      checkAuth();
    }, [dispatch, router]);
    
    useEffect(() => {
      console.log("Current resumes state:", resumes);
    }, [resumes]);
    
    // Fonction pour voir les détails du CV
    const handleViewResume = (resumeKey, event) => {
      event.preventDefault();
      // Extract the index from the resumeKey
      const index = parseInt(resumeKey.split('-')[1]);
      // Use filteredResumes instead of resumes to get the correct resume
      const resume = filteredResumes[index];
      
      if (resume) {
        setCurrentResume(resume);
        setShowPreview(true);
      } else {
        console.error('Resume not found:', resumeKey);
      }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedResumeId(null);
    };
    
    // Fonction pour formater la date
    const formatDate = (dateString) => {
      if (!dateString) return "Non disponible";
      try {
        const date = new Date(dateString);
        return date.toLocaleDateString('fr-FR', {
          day: 'numeric',
          month: 'numeric',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        });
      } catch (error) {
        console.error("Erreur lors du formatage de la date:", error);
        return "Date invalide";
      }
    };
    
    if (!isAuthorized) {
      return (
        <div className="h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Vérification de l&apos;authentification...</p>
          </div>
        </div>
      );
    }
    
    const filteredResumes = filter
      ? (resumes || []).filter(resume => resume.contract_type === filter)
      : resumes || [];
      
    return (
        <div className="h-screen flex flex-col bg-gray-100 relative pt-20 mb-20">
            {/* Contenu principal */}
            <div className="flex flex-col items-center flex-grow min-h-0 overflow-auto px-4">
            <button
                onClick={async () => {
                try {
                    await fetch("/api/logout", { method: "POST" });
                    router.push("/");
                } catch (error) {
                    console.error("Erreur lors de la déconnexion:", error);
                    alert("Erreur lors de la déconnexion. Veuillez réessayer.");
                }
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
            {status === 'loading' && (
                <div className="w-full text-center py-8">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Chargement des CV...</p>
                </div>
            )}
            {status === 'failed' && (
                <div className="w-full text-center py-8">
                    <div className="text-red-500 text-4xl mb-2">⚠️</div>
                    <p className="text-red-500">Erreur lors du chargement des CV : {error}</p>
                    <p className="text-sm text-gray-600 mt-2">Veuillez rafraîchir la page ou contacter le support si le problème persiste.</p>
                </div>
            )}
            {(status === 'succeeded' || status === 'idle') && (
                <ResumeTable resumes={filteredResumes} handleViewResume={handleViewResume} formatDate={formatDate} />
            )}
            </div>
            {/* Modal pour afficher le CV */}
            <Modal isOpen={showPreview} onClose={() => setShowPreview(false)}>
                {currentResume && (
                    <ResumeViewer resumeData={currentResume} />
                )}
            </Modal>
        </div>
    );
};

export default AdminDashboard;
