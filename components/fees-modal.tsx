'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface Course {
  name: string;
  feeRange: string;
}

export interface FeesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FeesModal({ isOpen, onClose }: FeesModalProps) {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      fetch('/api/fees')
        .then(res => res.json())
        .then(data => {
          setCourses(data.courses);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching fees:', error);
          setLoading(false);
        });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full">
        <div className="flex justify-between items-center p-6 border-b border-border">
          <h2 className="text-2xl font-bold text-foreground">Course-wise Fee Structure</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-muted rounded-lg transition"
            aria-label="Close modal"
          >
            <X size={24} className="text-foreground" />
          </button>
        </div>

        <div className="p-6">
          {loading ? (
            <div className="text-center py-8">
              <div className="inline-block animate-spin">Loading...</div>
            </div>
          ) : courses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {courses.map((course) => (
                <div
                  key={course.name}
                  className="p-4 border border-border rounded-lg hover:bg-secondary/50 transition"
                >
                  <h3 className="font-semibold text-lg text-foreground mb-2">{course.name}</h3>
                  <p className="text-accent-foreground font-medium">{course.feeRange}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground">No courses found</p>
          )}
        </div>
      </div>
    </div>
  );
}
