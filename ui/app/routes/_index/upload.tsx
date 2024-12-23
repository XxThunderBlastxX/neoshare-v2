import {ChangeEvent, useRef, useState} from 'react';
import {useDragDrop} from '~/hooks/useDragDrop';

export default function UploadScreen() {
    const [file, setFile] = useState<File | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadResult, setUploadResult] = useState<{ success: boolean; message: string } | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { isDragging, handleDragEnter, handleDragLeave, handleDragOver, handleDrop } = useDragDrop();

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!file) {
            alert('Please select a file first!');
            return;
        }

        setIsUploading(true);
        setUploadResult(null);

        // Simulating file upload
        try {
            await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate 2 second upload
            setUploadResult({ success: true, message: `File ${file.name} uploaded successfully!` });
        } catch (error) {
            setUploadResult({ success: false, message: 'An error occurred during upload.' });
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-24">
            <div className="w-full max-w-md mx-auto bg-neutral border border-[#24b7a6] shadow-md rounded-lg overflow-hidden">
                <div className="px-6 py-4">
                    <h2 className="text-2xl text-white font-bold mb-4">File Upload</h2>
                    <form onSubmit={handleSubmit}>
                        <div
                            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer ${
                                isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                            }`}
                            onDragEnter={handleDragEnter}
                            onDragLeave={handleDragLeave}
                            onDragOver={handleDragOver}
                            onDrop={(e) => {
                                handleDrop(e);
                                if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
                                    setFile(e.dataTransfer.files[0]);
                                }
                            }}
                            onClick={() => fileInputRef.current?.click()}
                        >
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                className="hidden"
                                name="file"
                            />
                            {file ? (
                                <p className="text-sm text-white">Selected file: {file.name}</p>
                            ) : (
                                <p className={"text-white"} >Drag & drop a file here, or click to select</p>
                            )}
                        </div>
                        <div className="mt-4 flex justify-end">
                            <button
                                type="submit"
                                disabled={!file || isUploading}
                                className={"btn btn-success disabled:opacity-65"}
                            >
                                {isUploading ? 'Uploading...' : 'Submit'}
                            </button>
                        </div>
                    </form>
                </div>
                {uploadResult && (
                    <div className={`px-6 py-4 ${uploadResult.success ? 'bg-green-100' : 'bg-red-100'} border-t ${uploadResult.success ? 'border-green-200' : 'border-red-200'}`}>
                        <p className={uploadResult.success ? 'text-green-700' : 'text-red-700'}>{uploadResult.message}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

