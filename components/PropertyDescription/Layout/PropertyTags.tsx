'use client';

import BadgeType from '@/components/UI/Badge/BadgeType';
import ViapropertyIcon from '@/components/UI/Icon/ViapropertyIcon';
import RatingBadge from '@/components/UI/Badge/RatingBadge';
import StarIcon from '@/components/UI/Icon/StarIcon';
import { useUserDataOnClient } from '@/hooks/queries/useUserDataOnClient';
import { useEffect, useRef, useState } from 'react';
import { useIsUserAddedPropertyToWishlist } from '@/hooks/queries/useIsUserAddedPropertyToWishlist';
import { useAddPropertyToUserWishlist } from '@/hooks/mutations/useAddPropertyToUserWishlist';
import { useRemovePropertyFromUserWishlist } from '@/hooks/mutations/useRemovePropertyFromUserWishlist';
import SnackbarMUI, { SnackBarSeverityType } from '@/components/UI/Snackbar/SnackbarMUI';

type PropertyTagsType = {
  tags: string[];
  rating?: number;
  visibility?: {
    shareIcon?: boolean;
    heartIcon?: boolean;
  }
  landlordId: string;
  propertyId: string;
  // children: ReactNode;
}

type SnackbarDataType = {
  severity: SnackBarSeverityType;
  message: string;
}

export default function
  PropertyTags({
                 tags,
                 rating,
                 landlordId,
                 propertyId,
                 visibility = { shareIcon: true, heartIcon: true }
               }: PropertyTagsType) {

  const { userData, loading: loadingUser } = useUserDataOnClient();
  const [showHeartBtn, setShowHeartBtn] = useState<boolean | null>(null);
  const { loading, data } = useIsUserAddedPropertyToWishlist(propertyId);

  const [disableWishlistBtn, setDisableWishlistBtn] = useState(false);
  const timer = useRef<NodeJS.Timeout | null>(null);
  const [userWishlistedProperty, setUserWishlistedProperty] = useState<boolean | null>(null);

  const {
    addPropertyToUserWishlist,
    loading: loadingAddingProperty,
    error: errorWhileAddingToWishlist
  } = useAddPropertyToUserWishlist();

  const {
    removePropIdFromUserWishlist,
    error: errorWhileRemovingFromWishlist,
    loading: loadingRemovalFromWishlist
  } = useRemovePropertyFromUserWishlist();

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const [snackbarData, setSnackbarData] = useState<SnackbarDataType>({
    message: ``,
    severity: `info`
  });

  useEffect(() => {
    if (userData) {
      if (userData.id === landlordId) {
        setShowHeartBtn(() => false);
      } else {
        setShowHeartBtn(() => true);
      }
    }
  }, [userData, loadingUser, landlordId]);

  useEffect(() => {
    if (data) {
      setUserWishlistedProperty(() => data?.userAddedPropertyToWishlist?.wishlisted);
      return;
    }
    setUserWishlistedProperty(() => data?.userAddedPropertyToWishlist?.wishlisted);
  }, [data, loading, propertyId]);


  function disableWishlistButton() {
    setDisableWishlistBtn(() => true);
    timer.current = setTimeout(() => {
      setDisableWishlistBtn(() => false);
    }, 5000);
  }

  function defineStackBarData(message: string, severity: SnackBarSeverityType) {
    setSnackbarData(() => ({
      message,
      severity: severity
    }));
    setSnackbarOpen(() => true);

  }

  async function wishlistProperty() {
    // optimistic update
    setUserWishlistedProperty(() => true);
    disableWishlistButton();
    await addPropertyToUserWishlist(propertyId);
    defineStackBarData(`This property is successfully wishlisted.`, `success`);
  }

  async function removePropertyFromUserWishlist() {
    // optimistic update
    setUserWishlistedProperty(() => false);
    disableWishlistButton();
    await removePropIdFromUserWishlist(propertyId);

    defineStackBarData(`This property is successfully removed from your wishlist.`, `info`);
  }

  return (
    <>
      <SnackbarMUI
        backgroundColor={`#fff`}
        variant={`outlined`}
        severity={snackbarData.severity}
        message={snackbarData.message}
        state={{ open: snackbarOpen, setOpen: setSnackbarOpen }} />
      <div className={`mb-5 mt-3 flex flex-row items-center justify-between gap-y-3 flex-wrap`}>
        <div className={`flex gap-3 items-center mt-3 ml-2 overflow-x-auto scrollbar-thin`}>
          {rating && (
            <div className={`mr-4 flex items-center`}>
              <RatingBadge rating={rating} />
            </div>
          )}
          {tags.map(function(tag, index) {
            // capitalize the first letter of the tag
            const capitalizedTag = tag.charAt(0).toUpperCase() + tag.slice(1);
            return (
              <BadgeType key={index} text={capitalizedTag} />
            );
          })}
          <div className={`flex items-center gap-0.5`}>
            {rating && Array.from({ length: 5 }, (_, index) => {
              const starState = rating >= index + 1 ? `filled` : `empty`;
              return (
                <StarIcon key={index} size={`sm`} state={starState} />
              );
            })}
          </div>
        </div>
        <div className={`flex gap-6 items-center`}>
          {(visibility.heartIcon && showHeartBtn) && (
            <div
              onClick={!disableWishlistBtn ? userWishlistedProperty ? removePropertyFromUserWishlist : wishlistProperty : undefined}>
              <ViapropertyIcon icon={userWishlistedProperty ? `heart-filled` : `heart`} />
            </div>
          )}
          {visibility.shareIcon && (
            <>
              <ViapropertyIcon icon={`share`} />
            </>
          )}
        </div>
      </div>
    </>
  );
}
